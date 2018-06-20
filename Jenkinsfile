pipeline {
    agent any
    stages {
        stage('Build'){
            steps {
                sh 'npm install'
                sh 'npm start'
            }
        }
        stage('Deliver dev') {
            when {
                branch 'dev'
                }
            steps { 
                sh 'echo "In dev"'
             }
        }
        stage('Deploy prod'){
            when {
                branch 'prod'
            }
            steps {
                sh 'echo "In prod"'
            }
        }
    }
}
