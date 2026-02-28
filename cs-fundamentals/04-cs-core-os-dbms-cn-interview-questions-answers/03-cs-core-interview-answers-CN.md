### **1. Basic Concepts**

#### **1. What is a computer network? Explain its purpose and importance.**

A computer network is a collection of interconnected devices (computers, servers, printers, routers, etc.) that communicate with each other to share data and resources.

Purpose:

- Resource sharing (files, printers, internet)
- Communication (email, video calls, messaging)
- Centralized data management
- Remote access

Importance:

- Reduces cost by sharing hardware/software
- Enables real-time communication
- Supports distributed systems
- Foundation of internet and modern applications

---

#### **2. Differentiate between network and internet.**

Network:

- A group of connected devices.
- Can be private.
- Example: Office LAN.

Internet:

- Global network of networks.
- Public and worldwide.
- Uses TCP/IP protocol.

Difference:

| Network                    | Internet                             |
| -------------------------- | ------------------------------------ |
| Limited scope              | Global scope                         |
| Can exist without internet | Internet is a collection of networks |
| May use any protocol       | Uses TCP/IP                          |

---

#### **3. What are the components of a computer network? (Nodes, Links, Media, Protocols)**

1. Nodes:
   Devices connected in the network.
   Example: Computer, server, printer.

2. Links:
   Communication paths between nodes.
   Example: Ethernet cable, wireless link.

3. Transmission Media:
   Physical or wireless medium used to transfer data.
   Example: Fiber optic, twisted pair, radio waves.

4. Protocols:
   Rules that govern communication.
   Example: TCP, IP, HTTP.

All components work together to enable reliable communication.

---

#### **4. Explain the terms: node, host, server, client, and peer.**

Node:
Any device connected to a network.

Host:
A node with an IP address that can send/receive data.

Server:
A system that provides services or resources.
Example: Web server.

Client:
A system that requests services.
Example: Browser requesting webpage.

Peer:
In peer-to-peer network, each device can act as both client and server.

---

#### **5. What is network topology? Why is it important?**

Network topology refers to the physical or logical arrangement of devices and connections in a network.

Types include:

- Bus
- Star
- Ring
- Mesh
- Tree
- Hybrid

Importance:

- Affects performance
- Affects fault tolerance
- Determines scalability
- Impacts cost
- Simplifies troubleshooting

Topology design directly impacts network efficiency and reliability.

#### **6. Explain different types of network topologies:**

**Bus Topology**

- All devices connected to a single backbone cable.
- Data travels in both directions.
- Simple and low cost.
- Failure of main cable brings entire network down.

**Star Topology**

- All devices connected to a central hub/switch.
- Easy to manage and troubleshoot.
- If central device fails, entire network fails.
- Most commonly used topology in LAN.

**Ring Topology**

- Devices connected in circular form.
- Data travels in one direction (usually).
- Failure of one node can affect entire network.

**Mesh Topology**

- Every device connected to every other device (Full Mesh).
- Partial mesh connects only some devices.
- High reliability and fault tolerance.
- Expensive and complex.

**Tree Topology**

- Combination of star and bus.
- Hierarchical structure.
- Used in large networks.

**Hybrid Topology**

- Combination of two or more topologies.
- Flexible and scalable.

---

#### **7. What is bandwidth? How is it measured?**

Bandwidth is the maximum data transfer capacity of a network.

Measured in:

- Bits per second (bps)
- Kbps, Mbps, Gbps

Higher bandwidth means more data can be transmitted per second.

It represents capacity, not actual speed.

---

#### **8. What is throughput? Differentiate between bandwidth and throughput.**

Throughput is the actual amount of data successfully transferred over the network in a given time.

Difference:

| Bandwidth                    | Throughput                      |
| ---------------------------- | ------------------------------- |
| Theoretical maximum capacity | Actual data transferred         |
| Fixed limit                  | Affected by traffic, congestion |
| Measured in bps              | Measured in bps                 |

Throughput is usually less than bandwidth.

---

#### **9. What is latency? Explain types of delays in networks.**

Latency is the time taken for data to travel from source to destination.

Types of delays:

1. Transmission Delay
   Time to push all bits onto the link.

2. Propagation Delay
   Time for signal to travel through medium.

3. Processing Delay
   Time router takes to process packet.

4. Queuing Delay
   Time packet waits in queue.

Total Latency = Transmission + Propagation + Processing + Queuing.

---

#### **10. What is jitter? Why is it important?**

Jitter is the variation in packet arrival time.

If packets do not arrive at equal intervals, jitter occurs.

Important because:

- Affects VoIP calls
- Impacts video streaming
- Causes lag in gaming

High jitter leads to poor real-time communication quality.

#### **11. Explain different types of networks based on geographical area:**

**PAN (Personal Area Network)**

- Very small area (within 10 meters).
- Example: Bluetooth between phone and laptop.

**LAN (Local Area Network)**

- Covers small area like office, school, building.
- High speed and low latency.

**MAN (Metropolitan Area Network)**

- Covers a city.
- Connects multiple LANs.

**WAN (Wide Area Network)**

- Covers large geographical area (country/continent).
- Uses leased lines, satellites.

**GAN (Global Area Network)**

- Worldwide coverage.
- Example: Internet.

---

#### **12. What is LAN? Explain its characteristics and uses.**

LAN (Local Area Network) connects devices within a limited area.

Characteristics:

- High data transfer speed
- Low latency
- Privately owned
- Easy to manage

Uses:

- File sharing
- Printer sharing
- Internal communication
- Office automation

---

#### **13. What is WAN? How is it different from LAN?**

WAN connects devices over large geographical areas.

Differences:

| LAN             | WAN                         |
| --------------- | --------------------------- |
| Small area      | Large area                  |
| High speed      | Lower speed compared to LAN |
| Privately owned | Often uses public telecom   |
| Low latency     | Higher latency              |

WAN connects multiple LANs together.

---

#### **14. What is wireless network? Explain its types.**

Wireless network transmits data using radio waves instead of cables.

Types:

- WLAN (Wi-Fi)
- WPAN (Bluetooth)
- Cellular network (4G/5G)
- Satellite network

Used where cable installation is difficult.

---

#### **15. What is VPN (Virtual Private Network)? Explain its types and advantages.**

VPN creates a secure encrypted connection over public internet.

Types:

- Remote Access VPN
- Site-to-Site VPN

Advantages:

- Secure communication
- Data encryption
- Remote access to private network
- Protects privacy on public Wi-Fi

#### **16. What is intranet and extranet?**

Intranet:

- A private network used within an organization.
- Accessible only to employees.
- Used for internal communication, file sharing, internal portals.

Extranet:

- Extension of intranet that allows limited access to external users (vendors, partners).
- Controlled and secure access.

Difference:
Intranet is internal-only; Extranet allows controlled external access.

---

#### **17. What is the Internet? How does it differ from the World Wide Web?**

Internet:

- Global network of interconnected networks.
- Infrastructure that connects devices worldwide.
- Uses TCP/IP protocol.

World Wide Web (WWW):

- Collection of web pages accessible via Internet.
- Uses HTTP/HTTPS protocol.

Difference:
Internet is the network infrastructure.
WWW is a service running on top of the Internet.

---

#### **18. Explain different network devices:**

Hub:

- Layer 1 device.
- Broadcasts data to all connected devices.

Switch:

- Layer 2 device.
- Forwards data based on MAC address.

Router:

- Layer 3 device.
- Routes data between different networks using IP address.

Bridge:

- Connects two LAN segments.
- Filters traffic using MAC address.

Gateway:

- Connects different network architectures.
- Protocol converter.

Repeater:

- Regenerates signal to extend network range.

Modem:

- Converts digital signal to analog and vice versa.

NIC (Network Interface Card):

- Hardware that connects device to network.
- Has MAC address.

Access Point:

- Connects wireless devices to wired network.

---

#### **19. Differentiate between hub and switch.**

| Hub               | Switch                   |
| ----------------- | ------------------------ |
| Layer 1 device    | Layer 2 device           |
| Broadcasts to all | Sends to specific device |
| No MAC table      | Maintains MAC table      |
| More collisions   | Fewer collisions         |
| Slower            | Faster                   |

---

#### **20. Differentiate between router and gateway.**

| Router                    | Gateway                        |
| ------------------------- | ------------------------------ |
| Connects similar networks | Connects different networks    |
| Works at Network Layer    | Can operate at multiple layers |
| Routes packets using IP   | Performs protocol conversion   |
| Example: Home router      | Example: Email gateway         |

#### **21. Differentiate between router and switch.**

| Router                                 | Switch                               |
| -------------------------------------- | ------------------------------------ |
| Works at Layer 3 (Network Layer)       | Works at Layer 2 (Data Link Layer)   |
| Uses IP address for forwarding         | Uses MAC address for forwarding      |
| Connects different networks            | Connects devices within same network |
| Maintains routing table                | Maintains MAC address table          |
| Slower than switch (due to processing) | Faster inside LAN                    |

Router is used for inter-network communication.
Switch is used for intra-network communication.

---

#### **22. Differentiate between bridge and switch.**

| Bridge                    | Switch                       |
| ------------------------- | ---------------------------- |
| Connects two LAN segments | Connects multiple devices    |
| Fewer ports (2–4)         | Many ports (24, 48 etc.)     |
| Software-based            | Hardware-based               |
| Slower                    | Faster                       |
| Older technology          | Modern replacement of bridge |

Switch is essentially a multi-port bridge.

---

#### **23. What is a load balancer? How does it work?**

A load balancer distributes incoming network traffic across multiple servers.

Purpose:

- Improve performance
- Increase availability
- Prevent server overload

Working:

- Receives client request
- Selects server using algorithm (Round Robin, Least Connections, etc.)
- Forwards request to selected server
- Returns response to client

Types:

- Hardware load balancer
- Software load balancer

---

#### **24. What is a firewall? Explain its types and working.**

Firewall is a security device/software that monitors and controls incoming and outgoing network traffic.

Working:

- Uses predefined rules
- Allows or blocks traffic

Types:

- Packet Filtering Firewall
- Stateful Inspection Firewall
- Proxy Firewall
- Next-Generation Firewall (NGFW)

Purpose:

- Protect network from unauthorized access
- Prevent attacks

---

#### **25. What is a proxy server?**

Proxy server acts as an intermediary between client and internet.

Working:

- Client sends request to proxy
- Proxy forwards request to server
- Server response goes back to proxy
- Proxy returns response to client

Uses:

- Security
- Caching
- Content filtering
- Hiding client IP address

## **4. OSI Model**

### **26. What is the OSI model? Why was it created?**

OSI (Open Systems Interconnection) model is a conceptual framework that standardizes network communication into 7 layers.

It was created by ISO to:

- Standardize communication between different systems
- Ensure interoperability between vendors
- Simplify troubleshooting
- Provide modular network design

It divides communication into layers so each layer has a specific responsibility.

---

### **27. Explain all 7 layers of the OSI model:**

**Layer 7: Application Layer**
Provides network services to end users.
Examples: HTTP, FTP, SMTP.

**Layer 6: Presentation Layer**
Handles data formatting, encryption, compression.

**Layer 5: Session Layer**
Manages sessions between applications.
Handles session establishment and termination.

**Layer 4: Transport Layer**
Provides end-to-end communication.
Handles reliability and flow control.
Protocols: TCP, UDP.

**Layer 3: Network Layer**
Handles logical addressing and routing.
Protocol: IP.

**Layer 2: Data Link Layer**
Handles framing and MAC addressing.
Protocol: Ethernet.

**Layer 1: Physical Layer**
Transmits raw bits over physical medium.
Deals with cables, voltage levels.

---

### **28. What is the function of each OSI layer?**

Application – Interface for user applications
Presentation – Data translation, encryption
Session – Session management
Transport – Reliable delivery, segmentation
Network – Routing and logical addressing
Data Link – Framing and error detection
Physical – Bit transmission over medium

Each layer performs a specific function and passes data to the next layer.

---

### **29. What protocols operate at each OSI layer?**

Application Layer: HTTP, FTP, SMTP, DNS
Presentation Layer: SSL/TLS
Session Layer: NetBIOS
Transport Layer: TCP, UDP
Network Layer: IP, ICMP
Data Link Layer: Ethernet (IEEE 802.3), Wi-Fi (IEEE 802.11)
Physical Layer: Fiber, Twisted Pair standards

Protocols are mapped based on their functionality.

---

### **30. What is encapsulation and de-capsulation in OSI model?**

Encapsulation:
When data moves from Application Layer to Physical Layer, each layer adds its own header.

Example flow:
Data → Segment → Packet → Frame → Bits

De-capsulation:
At receiver side, each layer removes its corresponding header while moving upward.

Encapsulation ensures structured and reliable communication across network layers.

### **31. What are PDUs (Protocol Data Units) at each layer?**

Application Layer: Data
Presentation Layer: Data
Session Layer: Data
Transport Layer: Segment (TCP) / Datagram (UDP)
Network Layer: Packet
Data Link Layer: Frame
Physical Layer: Bits

Each layer adds its own header, changing the name of the data unit.

---

## **5. TCP/IP Model**

### **32. What is the TCP/IP model? Explain its layers.**

TCP/IP model is a practical networking model used in the Internet.

It has 4 layers:

1. Application Layer
2. Transport Layer
3. Internet Layer
4. Network Access (Link) Layer

It is simpler and implementation-based compared to OSI model.

---

### **33. Differentiate between OSI model and TCP/IP model.**

<p align="center">
  <img src="https://www.swissns.ch/site/wp-content/uploads/2016/11/osi-model.gif" />
</p>

| OSI Model                              | TCP/IP Model                  |
| -------------------------------------- | ----------------------------- |
| 7 layers                               | 4 layers                      |
| Theoretical model                      | Practical model               |
| Developed by ISO                       | Developed by DARPA            |
| Separate Presentation & Session layers | Combined in Application layer |
| Clear layer separation                 | Less strict separation        |

TCP/IP is widely used in real-world networking.

---

### **34. Explain the four layers of TCP/IP model:**

Application Layer
Provides services like HTTP, FTP, SMTP, DNS.

Transport Layer
Provides end-to-end communication.
Protocols: TCP, UDP.

Internet Layer
Handles logical addressing and routing.
Protocol: IP.

Network Access (Link) Layer
Handles framing and physical transmission.
Protocols: Ethernet, Wi-Fi.

---

### **35. How does TCP/IP model map to OSI model?**

Application (TCP/IP)
= Application + Presentation + Session (OSI)

Transport (TCP/IP)
= Transport (OSI)

Internet (TCP/IP)
= Network (OSI)

Network Access (TCP/IP)
= Data Link + Physical (OSI)

TCP/IP combines some OSI layers for practical implementation.

### **36. What is the hybrid model (5-layer model)?**

Hybrid model (also called 5-layer Internet model) is a practical combination of OSI and TCP/IP models.

Layers:

1. Application
2. Transport
3. Network
4. Data Link
5. Physical

It separates Data Link and Physical layers (like OSI) but keeps fewer layers than OSI.

Used commonly for academic explanations.

---

## **6. Transmission Media**

### **37. What is transmission media? Explain its types.**

Transmission media is the physical path through which data travels between sender and receiver.

Types:

1. Guided Media (Wired)
2. Unguided Media (Wireless)

Guided uses cables.
Unguided uses electromagnetic waves.

---

### **38. Differentiate between guided and unguided media.**

| Guided Media                  | Unguided Media             |
| ----------------------------- | -------------------------- |
| Uses physical cables          | Uses air/space             |
| More secure                   | Less secure                |
| Less interference             | More interference          |
| Examples: Fiber, Twisted Pair | Examples: Radio, Microwave |

Guided is more stable; unguided offers mobility.

---

### **39. Explain guided media:**

Twisted Pair Cable

- Two copper wires twisted together
- Types: UTP, STP
- Used in LAN

Coaxial Cable

- Central conductor with insulation
- Used in cable TV

Fiber Optic Cable

- Uses light signals
- Very high speed
- Long-distance communication
- Immune to electromagnetic interference

---

### **40. Explain unguided/wireless media:**

Radio Waves

- Used in Wi-Fi, Bluetooth
- Can pass through walls

Microwaves

- Line-of-sight communication
- Used in satellite and cellular

Infrared

- Short range
- Cannot pass through walls

Satellite Communication

- Uses satellites for long-distance transmission
- Covers large geographical areas
