pipeline {
    agent any
    
    tools {
        nodejs 'NodeJS' // Make sure NodeJS is configured in Jenkins Global Tool Configuration
    }
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        
        stage('Install Playwright Browsers') {
            steps {
                sh 'npx playwright install --with-deps'
            }
        }
        
        stage('Run Tests') {
            steps {
                sh 'npm run tests:headless'
            }
        }
        
        stage('Generate Report') {
            steps {
                sh 'npm run report'
            }
        }
    }
    
    post {
        always {
            // Archive test results
            archiveArtifacts artifacts: 'test-results/**/*', allowEmptyArchive: true
            
            // Publish HTML report if playwright-report directory exists
            publishHTML([
                allowMissing: false,
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                reportName: 'Playwright Test Report'
            ])
        }
        
        failure {
            echo 'Pipeline failed!'
        }
        
        success {
            echo 'Pipeline succeeded!'
        }
    }
}