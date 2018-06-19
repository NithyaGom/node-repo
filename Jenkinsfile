pipeline {
    agent any
    stages {
        stage('Deliver master') {
            when {
                branch 'dev'
            }
            steps {
                sh 'npm install'
           }
        }
    }
}
