pipeline {
    agent any
    tools {
        nodejs 'nodejs'  // Use the NodeJS installation name from Global Tool Configuration
    }
    stages {
        stage('Install dependencies') {
            steps {
                script {
                    sh 'npm install'
                }
            }
        }
        stage('Run Tests') {
            steps {
                script {
                    sh 'testcafe chrome ./tests/example.test.js'
                }
            }
        }
    }
}
