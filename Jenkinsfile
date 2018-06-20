pipeline {
    agent any
    stages {
        stage('Build') {
            when {
                branch 'master'
            }
            steps {
                sh 'docker build -t node .'
                sh 'docker run -e "MESSAGE=First instance" -p 8087:8086 -d node-app'
            }
        }
        stage('Delivery'){
            when {
                branch 'dev'
            }
            steps {
                sh 'echo "In dev branch"'
            }
        }
        stage('pro'){
            when {
                branch 'prod'
            }
            steps {
                sh 'echo "In prod branch"'
            }
        }
    }
}
