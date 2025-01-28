pipeline {
    agent any
    stages {
        stage('Build') { 
            steps {
                sh 'npm install'
                sh 'npm install testcafe'
            }
        }
        stage('Test') {
            steps {
                sh 'testcafe chrome ./tests/example.test.js'
            }
        }
    }
}