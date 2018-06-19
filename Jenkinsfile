pipeline {
    agent any
    stages {
        stage('Deliver master') {
            steps {
                script {
                    echo "In master branch"
                    sh 'npm start'
                }
           }
        }
    }
}
