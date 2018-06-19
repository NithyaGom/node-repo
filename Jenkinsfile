pipeline {
    stages {
        stage('Deliver master') {
            agent any
            when {
                branch 'master'
            }
            steps {
                sh 'npm install'
           }
        }
    }
}
