FROM debian:stable

MAINTAINER Roman Ondráček <ondracek.roman@centrum.cz>
LABEL maintainer="ondracek.roman@centrum.cz"

# Install apt-utils, apt-transport-https, dirmngr, git, gnupg2 and lsb-release
RUN apt-get update \
 && apt-get install --no-install-recommends -y apt-utils apt-transport-https dirmngr git gnupg2 lsb-release

# Add IQRF Gateway Daemon's repository
RUN echo "deb [arch=amd64] http://repos.iqrfsdk.org/debian stretch stable" | tee -a /etc/apt/sources.list.d/iqrf-daemon.list \
 && echo "deb [arch=armhf] http://repos.iqrfsdk.org/raspbian stretch stable" | tee -a /etc/apt/sources.list.d/iqrf-daemon.list \
 && apt-key adv --keyserver keyserver.ubuntu.com --recv-keys 9C076FCC7AB8F2E43C2AB0E73241B9B7B4BD8F8E

# Install supervisor, mosquitto, iqrf-daemon, php, nginx and node.js
RUN apt-get update \
 && apt-get install --no-install-recommends -y composer curl iqrf-daemon mosquitto php7.0 php7.0-common php7.0-curl php7.0-fpm php7.0-json php7.0-mbstring php7.0-sqlite php7.0-zip nginx-full supervisor \
 && curl -sL https://deb.nodesource.com/setup_8.x | bash - \
 && apt-get install --no-install-recommends -y nodejs \
 && mkdir -p /var/run/sshd /var/log/supervisor \
 && apt-get clean \
 && rm -rf /var/lib/apt/lists/*

# Install IQRF Gateway Webapp
WORKDIR /var/www/iqrf-daemon-webapp
RUN composer create-project iqrfsdk/iqrf-daemon-webapp . \
 && sed -i 's/sudo\:\ true/sudo\:\ false/g' app/config/config.neon \
 && sed -i 's/iqrf-gw\:\ false/iqrf-gw\:\ true/g' app/config/config.neon \
 && sed -i "s/initDaemon: 'systemd'/initDaemon: 'docker-supervisor'/g" app/config/config.neon \
 && chmod 777 log/ \
 && chmod 777 temp/

# Setup php-fpm
RUN mkdir /run/php/ \
 && sed -i 's/user\ =\ www-data/user\ =\ root/g' /etc/php/7.0/fpm/pool.d/www.conf \
 && sed -i 's/group\ =\ www-data/group\ =\ root/g' /etc/php/7.0/fpm/pool.d/www.conf

# Install NodeRED dashboard
RUN npm install -g --unsafe-perm node-red \
 && npm install -g --unsafe-perm node-red/node-red-dashboard

# Copy custom configuration
WORKDIR /etc/nginx/sites-available
COPY config/nginx/localhost .
RUN ln -s /etc/nginx/sites-available/localhost /etc/nginx/sites-enabled/localhost \
 && rm /etc/nginx/sites-enabled/default
WORKDIR /etc/supervisor/conf.d
COPY config/supervisor/supervisord.conf .
WORKDIR /etc/iqrf-daemon
COPY config/iqrf-daemon/. .
RUN sed -i 's/\"IqrfInterface\"\:\ \"\/dev\/spidev2\.0\"/"IqrfInterface\"\:\ \"\/dev\/spidev0\.0\"/g' IqrfInterface.json
RUN mkdir -p /node-red
WORKDIR /node-red
COPY config/node-red/. .

# expose ports
EXPOSE 80 1880 1883 8080 9001 55000/udp 55300/udp

# run the supervisor service
CMD ["/usr/bin/supervisord"]
