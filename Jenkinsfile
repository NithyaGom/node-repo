pipeline {
    agent any
    stages {
        stage('Deliver master') {
            when {
                branch '*/master'
            }
            steps {
                echo "In master branch"
           }
        }
    }
}
