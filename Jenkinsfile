pipeline {
    agent any
    stages {
        stage('Deliver master') {
            when {
                branch 'master'
                }
            steps { 
                echo "in master"
                sh 'npm start'
             }
        }
        }
    }
}
