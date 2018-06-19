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
    }
}
