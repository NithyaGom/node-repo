pipeline {
    agent any
    stages {
        stage {
            when {
                branch 'master'
            }
            steps {
                sh 'docker build -t node .'
            }
        }
        stage('Delivery'){
            when {
                branch 'dev'
            }
            steps {
                sh 'echo "In dev branch"'
            }
        }
        stage('pro'){
            when {
                branch 'prod'
            }
            steps {
                sh 'echo "In prod branch"'
            }
        }
    }
}
