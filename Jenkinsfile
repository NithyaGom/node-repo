pipeline {
    agent any
    stages {
        stage('Deliver master') {
            when {
                expression {
                    return env.BRANCH_NAME == "master"
                }
            }
            steps {
                echo "In master branch"
           }
        }
    }
}
