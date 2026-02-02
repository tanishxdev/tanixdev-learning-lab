function ComingSoon({ projectId }) {
  return (
    <div className="text-center py-20">
      <h2 className="text-2xl font-semibold mb-4">Project Coming Soon</h2>

      <p className="text-gray-400 max-w-xl mx-auto">
        The project <span className="text-indigo-400">{projectId}</span> is
        planned in the roadmap but not implemented yet.
      </p>

      <p className="text-gray-500 mt-3">
        This is intentional — projects are built one-by-one with deep learning.
      </p>
    </div>
  );
}

export default ComingSoon;
