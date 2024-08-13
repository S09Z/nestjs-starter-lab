provider "aws" {
  region = "us-west-2"
}

resource "aws_vpc" "main" {
  cidr_block = "10.0.0.0/16"
}

resource "aws_subnet" "subnet" {
  vpc_id            = aws_vpc.main.id
  cidr_block        = "10.0.1.0/24"
  availability_zone = "us-west-2a"
}

resource "aws_security_group" "allow_http" {
  vpc_id = aws_vpc.main.id

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_instance" "nestjs" {
  ami           = "ami-0c55b159cbfafe1f0"  # Amazon Linux 2 AMI (Region-specific)
  instance_type = "t2.micro"
  subnet_id     = aws_subnet.subnet.id
  security_groups = [aws_security_group.allow_http.name]

  tags = {
    Name = "NestJS-Server"
  }

  provisioner "remote-exec" {
    inline = [
      "sudo yum update -y",
      "curl -sL https://rpm.nodesource.com/setup_16.x | sudo bash -",
      "sudo yum install -y nodejs",
      "git clone <YOUR_REPO_URL> /home/ec2-user/nestjs-api",
      "cd /home/ec2-user/nestjs-api",
      "npm install",
      "npm run build",
      "npm run start:prod"
    ]

    connection {
      type        = "ssh"
      user        = "ec2-user"
      private_key = file("<PATH_TO_YOUR_PRIVATE_KEY>")
      host        = self.public_ip
    }
  }
}

output "instance_ip_addr" {
  value = aws_instance.nestjs.public_ip
}
