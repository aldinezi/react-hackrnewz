pipeline {
  agent any

  tools {nodejs "node"}

  stages {
    stage('Cloning Git') {
      steps {
        git 'https://github.com/aldinezi/react-hackrnewz.git'
      }
    }

    stage('Install dependencies') {
      steps {
        sh 'npm install'
      }
    }

    stage('Build') {
      steps {
        sh 'npm run build'
      }
    }
  }
}