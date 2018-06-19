pipeline {
    agent any
    stages {
        stage('Deliver master') {
            steps {
            when {
                branch 'master'
                }
            script { 
                echo "in master"
                sh 'npm start'
             }
        }
        }
    }
}
