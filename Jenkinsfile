pipeline {
    agent any
    parameters {
        string(defaultValue: "master", description: 'Which branch?', name: 'BRANCH_NAME')
    }
    stages {
        stage('Deliver master') {
            steps {
                script {
                    if (params.BRANCH_NAME == 'master')
                    {
                        echo "In master branch"
                        sh 'npm start'
                    }
                }
           }
        }
    }
}
