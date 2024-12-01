FROM nginx:alpine

# Copy a custom nginx configuration if needed
# COPY nginx.conf /etc/nginx/conf.d/default.conf

RUN echo '<body>v0.1.3</body>' > /usr/share/nginx/html/index.html
