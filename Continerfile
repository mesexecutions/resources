# Use an official base image with minimal tools
FROM registry.fedoraproject.org/fedora:latest

# Set environment variables to prevent interaction during installs
ENV LANG=en_US.UTF-8
ENV LANGUAGE=en_US:en
ENV LC_ALL=en_US.UTF-8

# Update the base image and install Apache
RUN dnf update -y && \
    dnf install -y httpd && \
    dnf clean all

# Add a custom HTML file
RUN echo "<html><h1>Welcome to Podman Apache Container</h1></html>" > /var/www/html/index.html

# Expose port 80 for HTTP traffic
EXPOSE 80

# Set Apache as the default command to run when the container starts
CMD ["/usr/sbin/httpd", "-D", "FOREGROUND"]
