FROM nginx:alpine

# Copy a custom nginx configuration if needed
# COPY nginx.conf /etc/nginx/conf.d/default.conf

RUN echo '<body>v0.1.1</body>' > /usr/share/nginx/html/index.html
