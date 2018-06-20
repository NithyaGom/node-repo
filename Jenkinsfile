pipeline {
    agent any
    stages {
        stage('Build') {
            when {
                branch 'master'
            }
            steps {
                sh 'docker build -t node .'
                sh 'docker run -e "MESSAGE=First instance" -p 8088:8080 -d node'
            }
        }
        stage('Delivery'){
            when {
                branch 'dev'
            }
            steps {
                sh 'echo "In dev branch"'
                sh 'docker run -e "MESSAGE=Second instance" -p 8089:8080 -d node'
            }
        }
        stage('pro'){
            when {
                branch 'prod'
            }
            steps {
                sh 'echo "In prod branch"'
                sh 'docker build -t nginx .'
                sh 'docker run -p 8090:80 -d nginx'
            }
        }
    }
}
