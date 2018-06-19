pipeline {
    agent any
    stages {
        stage('Deliver master') {
            when {
                branch 'master'
            }
            steps {
                sh 'npm install'
           }
        }
        stage('Deliver dev') {
            when {
                branch 'de'
            }
            steps {
                sh 'npm start '
           }
        }
    }
}
