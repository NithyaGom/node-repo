pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'node server/models/database.js'
                sh 'node server/routes/index.js &'
            }
        }
        stage('Delivery'){
            steps {
                sh 'echo "In dev branch"'
            }
        }
        stage('pro'){
            steps {
                sh 'echo "In prod branch"'
            }
        }
    }
}
