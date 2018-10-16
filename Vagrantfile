Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/bionic64"

  config.vm.network "forwarded_port" , guest: 3000, host: 3000
  config.vm.network "forwarded_port" , guest: 5000, host: 5000

  #config.vm.synced_folder  "app/", "/home/vagrant/app"
  config.vm.synced_folder ".", "/vagrant", type: "rsync", disabled: false, rsync__auto: false, rsync__exclude: [".git/"]
  # Uncomment the following line to allow for symlinks
  # in the app folder. This will not work on Windows, and will
  # not work with Vagrant providers other than VirtualBox
  # config.vm.customize ["setextradata", :id, "VBoxInternal2/SharedFoldersEnableSymlinksCreate/app", "1"]

  config.vm.provision "shell", privileged: false, inline: <<-SHELL
    sudo cp -R /vagrant/* /home/vagrant/
    sudo chown -R vagrant:vagrant /home/vagrant/

    echo "Provisioning Virtual Machine..."
    sudo apt-get update && sudo apt-get -y upgrade
    echo "Installing developer packages..."
    sudo apt-get install -y build-essential libssl-dev --no-install-recommends
    echo "Installing Git..."
    sudo apt-get install git -y > /dev/null
    echo "Installing Node and NVM..."
    sudo apt install npm -y
    sudo npm install -g n -y
    sudo n latest -y


    #Running npm so i don't have to later
    sudo npm i /home/vagrant/
    sudo npm i /home/vagrant/client

    SHELL

end

