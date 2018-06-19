pipeline {
    agent any
    stages {
        stage('Deliver master') {
            steps {
                script {
                    if (env.BRANCH_NAME == 'master')
                    {
                        echo "In master branch"
                        sh 'npm start'
                    }
                }
           }
        }
    }
}
