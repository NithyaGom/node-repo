pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'node server/routes/index.js &'
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
