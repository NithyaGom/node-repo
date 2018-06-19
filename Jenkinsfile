pipeline {
    agent any
    stages {
        stage('Deliver master') {
            when {
                branch 'master'
                }
            script { 
                echo "in master"
             }
        }
    }
}
