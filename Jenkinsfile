pipeline {
    agent any

    stages {

        stage('Test Docker image') {

            steps {
                sh '''
                export PATH=/sbin:/usr/sbin:/bin:/usr/bin:/usr/local/bin/
                cd server
                npm test
                '''
            }

        }

        stage('Build Docker image') {

            steps {
                sh '''
                export PATH=/sbin:/usr/sbin:/bin:/usr/bin:/usr/local/bin/
                docker-compose build
                '''
            }

        }

        stage('Run Docker image') {

            steps {
                sh '''
                export PATH=/sbin:/usr/sbin:/bin:/usr/bin:/usr/local/bin/
                docker-compose up
                '''
            }

        }
    }
}