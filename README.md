# code-compiler

THis is repo contains server-side handling code for code compiler using cluster with multiple workers which will be equilvalent to
no of processor on a machine and currently it supports 5 scripting langauage . 

Aim : 

Sandboxing:

1.Sandbox for secure running environment. 

2.Monitor the process's resource consumption.

3.Limit access to filesystem (So a user can't read submission of other users)

4.Limit system resouces per submission (CPU time, Memory, Disk Usage)

5.Disable network access.


=>chroot jail for limiting filesystem access, iptables for network firewall, ulimit for limiting system resources and chown/chmod for user permissions for files on the filesystem.

=>make sure all the submissions get the fair and equal amount of system resources.

Scalability 

Adding multiple code checker servers behind a load balancer and/or running multiple simultaneous submissions on the same machine. 
