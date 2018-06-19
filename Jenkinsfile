pipeline {
    agent any
    stages {
        stage('Deliver master') {
            steps {
                script {
                    when {
                        branch 'master'
                        echo "in master"
                    }
                }
           }
        }
    }
}
