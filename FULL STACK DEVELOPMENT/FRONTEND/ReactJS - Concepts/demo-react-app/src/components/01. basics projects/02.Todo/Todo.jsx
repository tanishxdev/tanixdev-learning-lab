import { useState, useEffect } from "react";

function Todo() {

  const [taskText, setTaskText] = useState("");

  // ✅ Load tasks from localStorage safely on first render
  const [tasks, setTasks] = useState(() => {
    try {
      const stored = localStorage.getItem("tasks");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const [editingIndex, setEditingIndex] = useState(null);
  const [editText, setEditText] = useState("");

  // ✅ Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // ADD TASK
  const addTask = () => {
    if (taskText.trim() === "") return;

    setTasks([
      ...tasks,
      { text: taskText, completed: false }
    ]);

    setTaskText("");
  };

  // DELETE TASK
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  // TOGGLE COMPLETE
  const toggleComplete = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // ENTER EDIT MODE
  const startEdit = (index, text) => {
    setEditingIndex(index);
    setEditText(text);
  };

  // SAVE EDIT
  const saveEdit = (index) => {
    if (editText.trim() === "") return;

    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, text: editText } : task
      )
    );

    setEditingIndex(null);
    setEditText("");
  };

  return (
    <div className="w-full max-w-lg bg-white text-black p-6 rounded-xl shadow-lg">

      <h2 className="text-2xl font-semibold mb-4 text-center">
        Smart Todo App
      </h2>

      {/* INPUT SECTION */}
      <div className="flex gap-2 mb-5">
        <input
          type="text"
          placeholder="Enter new task..."
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          className="flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <button
          onClick={addTask}
          className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
        >
          Add
        </button>
      </div>

      {/* TASK LIST */}
      <ul className="space-y-3">
        {tasks.map((task, index) => (
          <li
            key={index}
            className="flex items-center justify-between bg-gray-100 px-3 py-2 rounded-md"
          >

            {editingIndex === index ? (
              <input
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                className="flex-1 px-2 py-1 border rounded-md"
              />
            ) : (
              <span
                className={`flex-1 ${
                  task.completed
                    ? "line-through text-gray-500"
                    : "text-gray-800"
                }`}
              >
                {task.text}
              </span>
            )}

            <div className="flex gap-2 ml-3">

              {editingIndex === index ? (
                <button
                  onClick={() => saveEdit(index)}
                  className="bg-blue-600 text-white px-3 py-1 rounded-md text-sm"
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={() => startEdit(index, task.text)}
                  className="bg-gray-600 text-white px-3 py-1 rounded-md text-sm"
                >
                  Edit
                </button>
              )}

              <button
                onClick={() => toggleComplete(index)}
                className={`px-3 py-1 rounded-md text-sm ${
                  task.completed
                    ? "bg-yellow-500 text-white"
                    : "bg-green-600 text-white"
                }`}
              >
                {task.completed ? "Undo" : "Done"}
              </button>

              <button
                onClick={() => deleteTask(index)}
                className="bg-red-600 text-white px-3 py-1 rounded-md text-sm"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>

    </div>
  );
}

export default Todo;
