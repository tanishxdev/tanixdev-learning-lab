## **I. OPERATING SYSTEM FUNDAMENTALS**

### **1. Core OS Concepts**

#### **1. What is an operating system? What are its main functions and objectives?**

An Operating System (OS) is system software that acts as an interface between the user/applications and the computer hardware.

It manages hardware resources and provides services to programs.

Main Functions:

1. Process Management
   - Create, schedule, and terminate processes
   - Handle CPU allocation

2. Memory Management
   - Allocate and deallocate memory
   - Manage virtual memory

3. File System Management
   - Create, delete, read, write files
   - Manage directory structure

4. Device Management
   - Control I/O devices using drivers

5. Security & Protection
   - Authentication
   - Access control

6. Resource Allocation
   - Fair and efficient usage of CPU, memory, I/O

Objectives:

- Maximize CPU utilization
- Ensure fairness
- Provide convenience to users
- Ensure security and reliability
- Optimize system performance

---

#### **2. Differentiate between user mode and kernel mode.**

User Mode:

- Applications run here
- Limited privileges
- Cannot directly access hardware
- Cannot execute privileged instructions
- Safer environment

Kernel Mode:

- OS runs here
- Full hardware access
- Can execute privileged instructions
- Direct access to memory and devices

Key Difference:

User mode is restricted for safety.
Kernel mode has complete control over the system.

Mode switch happens via system calls.

---

#### **3. What is a system call? Explain the difference between system calls and library calls.**

System Call:

A system call is a mechanism through which a user program requests a service from the operating system kernel.

Examples:

- fork()
- read()
- write()
- exec()

Library Call:

A function provided by standard libraries (like C standard library).

Examples:

- printf()
- scanf()

Difference:

System Call:

- Executes in kernel mode
- Direct interaction with OS
- Slower due to mode switch

Library Call:

- Executes in user mode
- May internally invoke system calls
- Faster if no kernel interaction

---

#### **4. What is a bootstrap program? Explain the booting process of an OS.**

Bootstrap Program:

A small program stored in ROM that initializes the system and loads the operating system into memory.

Booting Process:

1. Power On
2. BIOS/UEFI runs POST (Power-On Self Test)
3. Bootloader is loaded from disk
4. Bootloader loads OS kernel into memory
5. Kernel initializes memory, CPU, devices
6. Init process/system services start
7. System becomes ready for user interaction

---

#### **5. Differentiate between monolithic kernel and microkernel architectures.**

Monolithic Kernel:

- Entire OS runs in kernel space
- High performance
- Less modular
- Example: Traditional UNIX

Microkernel:

- Minimal kernel (only core services)
- Other services run in user space
- More modular
- More secure
- Slightly slower due to IPC

Key Difference:

Monolithic → performance-focused
Microkernel → modularity & security-focused

---

#### **6. What is a device driver and why is it needed?**

A device driver is a special type of system software that allows the operating system to communicate with hardware devices.

It acts as a translator between the OS and the hardware.

Why It Is Needed:

Hardware devices (keyboard, mouse, printer, disk, GPU) have their own way of working.

The OS cannot directly understand device-specific instructions.

The device driver:

1. Converts OS commands into hardware-specific signals
2. Handles communication between OS and device
3. Manages input/output operations
4. Handles interrupts from the device

Without a device driver:

- OS cannot control the device
- Hardware will not function properly

Example:

When you print a document:

1. Application sends print request
2. OS forwards request to printer driver
3. Printer driver translates it into printer-specific commands
4. Printer executes the command

Key Point:

Device drivers run in kernel mode because they need direct hardware access.

---

### **2. OS Types and Architectures**

#### **7. Explain different types of operating systems: Batch, Time-sharing, Distributed, Network, Real-Time, Mobile.**

Batch OS:

- Jobs are collected and executed in batches.
- No user interaction during execution.
- Suitable for large repetitive tasks.
- Example: Payroll systems.

Time-Sharing OS:

- Multiple users share CPU time.
- Each user gets small time slices.
- Provides interactive experience.
- Example: UNIX systems.

Distributed OS:

- Manages multiple computers as a single system.
- Shares resources across network.
- Improves reliability and performance.

Network OS:

- Provides networking features.
- Each system has its own OS.
- Used for file sharing, printer sharing.

Real-Time OS (RTOS):

- Designed for time-critical tasks.
- Guarantees response within fixed time.
- Used in embedded systems.

Mobile OS:

- Designed for smartphones/tablets.
- Optimized for battery and touch interface.
- Example: Android, iOS.

---

#### **8. Differentiate between Multitasking, Multiprocessing, and Multithreading. What is a Real-Time Operating System (RTOS)? Differentiate between hard and soft real-time systems.**

Multitasking:

- Multiple tasks share a single CPU.
- Context switching used.
- Example: Running browser + music player.

Multiprocessing:

- Multiple CPUs/processors.
- True parallel execution.
- Higher performance.

Multithreading:

- Multiple threads within same process.
- Share memory.
- Lightweight compared to processes.

RTOS:

An OS designed to respond within strict timing constraints.

Hard Real-Time:

- Missing deadline = system failure.
- Example: Airbag system.

Soft Real-Time:

- Missing deadline reduces performance but not catastrophic.
- Example: Video streaming.

---

#### **9. What is the difference between symmetric multiprocessing (SMP) and asymmetric multiprocessing?**

SMP:

- All processors are equal.
- Shared memory.
- Any processor can run any process.
- Load balancing required.

Asymmetric Multiprocessing:

- One master processor controls others.
- Slave processors execute assigned tasks.
- Simpler but less flexible.

---

#### **10. What is NUMA architecture and how does it differ from SMP?**

NUMA (Non-Uniform Memory Access):

- Each processor has its own local memory.
- Access time depends on memory location.
- Local memory is faster than remote memory.

SMP:

- Uniform memory access.
- All processors access same memory with equal speed.

Key Difference:

SMP → equal memory access time.
NUMA → memory access time varies.

---

---

## **II. PROCESS MANAGEMENT**

### **3. Process Fundamentals**

#### **11. What is a process? Differentiate between program and process.**

Process:

A process is a program in execution.

It includes:

- Program code
- Program counter
- Stack
- Heap
- Registers

Program:

- Passive entity.
- Stored on disk.
- Set of instructions.

Process:

- Active entity.
- Loaded into memory.
- Has execution state.

Key Difference:

Program = static
Process = dynamic execution instance

#### **12. What is a Process Control Block (PCB)? What information does it contain?**

Process Control Block (PCB) is a data structure maintained by the OS to store all information about a process.

It is created when a process is created and deleted when the process terminates.

Information stored in PCB:

1. Process ID (PID)
2. Process State (New, Ready, Running, Waiting, Terminated)
3. Program Counter
4. CPU Registers
5. CPU Scheduling Information (priority, queue pointers)
6. Memory Management Information (base, limit, page table)
7. Accounting Information (CPU time used)
8. I/O Status Information (open files, devices allocated)

PCB is essential for context switching.

---

#### **13. Explain different states of a process: New, Ready, Running, Waiting, Terminated.**

![](https://cdn1.byjus.com/wp-content/uploads/2022/08/word-image-15.png)
New:

- Process is being created.

Ready:

- Process is ready to execute.
- Waiting for CPU allocation.

Running:

- Process is currently executing on CPU.

Waiting (Blocked):

- Waiting for I/O or some event.

Terminated:

- Process has finished execution.

State transitions occur due to scheduling, I/O requests, or completion.

---

#### **14. What is context switching? Explain its steps and overhead.**

Context switching is the process of saving the state of a currently running process and loading the state of another process.

![context switching](https://media.geeksforgeeks.org/wp-content/uploads/20250825182631440618/1223.webp)
Steps:

1. Save current process state into its PCB
2. Update its state to Ready/Waiting
3. Select next process from ready queue
4. Load its state from PCB
5. Update state to Running

Overhead:

- No useful work is done during switching.
- Saving/loading registers takes time.
- Frequent switching reduces CPU efficiency.

---

#### **15. Differentiate between process and thread.**

![process and thread](https://assets.bytebytego.com/diagrams/0304-program-process-thread.png)
Process:

- Independent execution unit
- Has separate memory space
- Heavyweight
- Communication via IPC

Thread:

- Lightweight unit within a process
- Shares memory with other threads
- Faster context switching
- Communication via shared memory

Key Difference:

Process → isolated memory
Thread → shared memory

---

#### **16. What is a thread? Differentiate between user-level and kernel-level threads.**

Thread:

A thread is the smallest unit of CPU execution within a process.

It shares code, data, and resources of the process but has its own:

- Program counter
- Stack
- Registers

User-Level Threads:

- Managed by user-level library
- Kernel unaware of threads
- Faster switching
- Blocking system call blocks entire process

Kernel-Level Threads:

- Managed by OS kernel
- Kernel aware of each thread
- True parallelism possible
- Slower due to kernel involvement

Key Difference:

User-level → faster but limited
Kernel-level → more powerful but heavier

### **4. Threads and Multithreading**

#### **17. What are the benefits of multithreading?**

1. Responsiveness
   - Application remains responsive even if one thread is blocked.

2. Resource Sharing
   - Threads share memory and resources of the same process.

3. Economy
   - Creating threads is cheaper than creating processes.

4. Scalability
   - Can utilize multi-core processors efficiently.

5. Better CPU Utilization
   - While one thread waits for I/O, another can execute.

---

#### **18. What is thread context switching and how does it differ from process context switching?**

Thread Context Switching:

- Switching between threads of the same process.
- Only registers and stack need to be switched.
- No memory space change required.

Process Context Switching:

- Switching between different processes.
- Requires switching memory address space.
- More expensive.

Key Difference:

Thread switching is faster because threads share the same memory space.
Process switching is slower due to memory management overhead.

---

#### **19. What is thread pooling and why is it used?**

Thread Pooling:

A technique where a fixed number of threads are created in advance and reused to execute tasks.

Why Used:

1. Reduces thread creation overhead.
2. Controls number of concurrent threads.
3. Improves performance.
4. Prevents resource exhaustion.

Used in web servers, application servers, and background task systems.

---

#### **20. What is CPU scheduling? What are its objectives?**

CPU Scheduling:

Process of selecting one process from ready queue to allocate CPU.

Objectives:

1. Maximize CPU utilization
2. Maximize throughput
3. Minimize turnaround time
4. Minimize waiting time
5. Minimize response time
6. Ensure fairness

Scheduling is handled by the short-term scheduler.

---

#### **21. Explain different scheduling algorithms: FCFS, SJF, SRTF, Priority, Round Robin, Multi-Level Queue, Multi-Level Feedback Queue.**

FCFS (First-Come First-Served):

- Non-preemptive.
- Executes in arrival order.
- Simple but may cause convoy effect.

SJF (Shortest Job First):

- Non-preemptive.
- Selects process with shortest burst time.
- Optimal for minimum average waiting time.

SRTF (Shortest Remaining Time First):

- Preemptive version of SJF.
- Switches if a shorter job arrives.

Priority Scheduling:

- Highest priority process executes first.
- Can be preemptive or non-preemptive.
- May cause starvation.

Round Robin (RR):

- Each process gets fixed time quantum.
- Preemptive.
- Good for time-sharing systems.

Multi-Level Queue:

- Separate ready queues based on process type.
- Each queue has its own scheduling algorithm.

Multi-Level Feedback Queue (MLFQ):

- Processes can move between queues.
- Adapts based on behavior.
- Prevents starvation and improves responsiveness.

#### **22. What is the difference between preemptive and non-preemptive scheduling?**

Preemptive Scheduling:

- CPU can be taken away from a running process.
- OS can interrupt execution.
- Better response time.
- Example: Round Robin, SRTF.

Non-Preemptive Scheduling:

- Once CPU is allocated, process runs until completion or blocking.
- No forced interruption.
- Simpler but less responsive.
- Example: FCFS, SJF (non-preemptive).

Key Difference:

Preemptive → CPU can be forcibly reallocated.
Non-preemptive → Process keeps CPU until it releases it.

---

#### **23. Explain the concepts of CPU burst and I/O burst.**

CPU Burst:

- Time period during which a process executes on CPU.
- Performs computations.

I/O Burst:

- Time period during which process waits for I/O operations.
- CPU not used.

Process execution pattern:

CPU Burst → I/O Burst → CPU Burst → I/O Burst → … → Termination.

CPU-bound processes:

- Long CPU bursts.
- Less I/O.

I/O-bound processes:

- Short CPU bursts.
- Frequent I/O operations.

---

#### **24. What is the difference between long-term, short-term, and medium-term schedulers?**

Long-Term Scheduler:

- Also called Job Scheduler.
- Selects jobs from disk and loads into memory.
- Controls degree of multiprogramming.
- Runs less frequently.

Short-Term Scheduler:

- Also called CPU Scheduler.
- Selects process from ready queue.
- Allocates CPU.
- Runs very frequently.

Medium-Term Scheduler:

- Handles swapping.
- Suspends and resumes processes.
- Reduces degree of multiprogramming temporarily.

Key Difference:

Long-term → admission control.
Short-term → CPU allocation.
Medium-term → swapping control.

---

#### **25. What is IPC? Why is it needed?**

IPC (Inter-Process Communication):

Mechanism that allows processes to communicate and synchronize.

Why Needed:

1. Data sharing between processes.
2. Process coordination.
3. Resource sharing.
4. Event notification.

Without IPC, processes remain isolated.

---

#### **26. Explain different IPC mechanisms: pipes, named pipes, message queues, shared memory, semaphores, sockets, signals.**

Pipes:

- Unidirectional communication.
- Used between related processes.
- Anonymous.

Named Pipes (FIFO):

- Bidirectional.
- Can be used between unrelated processes.

Message Queues:

- Messages stored in queue.
- Structured communication.

Shared Memory:

- Fastest IPC.
- Processes share common memory region.
- Requires synchronization.

Semaphores:

- Used for synchronization.
- Control access to shared resources.

Sockets:

- Used for communication over network.
- Client-server communication.

Signals:

- Used for sending small notifications.
- Example: kill signal.

#### **27. What is a race condition?**

A race condition occurs when two or more processes/threads access shared data simultaneously and the final outcome depends on the order of execution.

If access is not properly synchronized, the result becomes unpredictable.

Example:

Two threads increment the same variable at the same time.

If both read the same old value and update it, one increment may be lost.

Race condition happens inside the critical section.

Solution:

- Use synchronization mechanisms like mutex, semaphore, monitor.

---

#### **28. What is the critical section problem?**

Critical Section:

A part of code where shared resources are accessed.

Critical Section Problem:

How to design a protocol so that multiple processes do not execute their critical section at the same time.

Requirements for Solution:

1. Mutual Exclusion
   - Only one process in critical section at a time.

2. Progress
   - If no one is in critical section, one of the waiting processes must be selected.

3. Bounded Waiting
   - A process should not wait indefinitely.

---

#### **29. What is a semaphore? Differentiate between binary and counting semaphores.**

Semaphore:

A synchronization tool used to control access to shared resources.

It is an integer variable accessed using two atomic operations:

- wait() (P operation)
- signal() (V operation)

Binary Semaphore:

- Value: 0 or 1
- Used for mutual exclusion
- Similar to mutex

Counting Semaphore:

- Value can be >1
- Used when multiple instances of resource exist
- Controls access to resource pool

Key Difference:

Binary → single resource
Counting → multiple resources

---

#### **30. What is a mutex? Differentiate between mutex and semaphore.**

Mutex:

Mutual exclusion lock used to protect critical section.

Only one thread can acquire mutex at a time.

Difference:

Mutex:

- Binary lock (locked/unlocked)
- Ownership concept (only owner can release)
- Used mainly in threads

Semaphore:

- Counter-based
- No ownership concept
- Used for signaling and resource counting

Key Difference:

Mutex → locking mechanism
Semaphore → signaling + resource control mechanism

---

#### **31. What is a monitor? How does it ensure synchronization?**

Monitor:

A high-level synchronization construct that combines:

- Shared variables
- Procedures
- Synchronization mechanism

Only one process/thread can execute inside monitor at a time.

It ensures synchronization using:

1. Mutual exclusion automatically
2. Condition variables for waiting and signaling

Monitor internally uses mutex and condition variables.

Advantage:

Simpler and safer abstraction compared to raw semaphores.
