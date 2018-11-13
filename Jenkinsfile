pipeline {
  agent {
    docker {
      image 'aossie/react-native-ci:version1.3'
    }

  }
  stages {
    stage('Build') {
      agent {
        docker {
          image 'aossie/react-native-ci:version1.3'
        }

      }
      steps {
        sh '''mkdir -p android/app/src/main/assets
react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
cd android && ./gradlew assembleDebug
'''
      }
    }
  }
}