# Sistem Penerjemah Bahasa Isyarat Menggunakan Hand Gesture

Mengkalsifikasi hand gesture dengan standar ASL(American Sign Language) menggunakan MediaPipe (Python version).<br> Ini adalah aplikasi yang mengenali Hand Gesture (bahasa Isyarat) dengan MLP sederhana menggunakan keypoint yang terdeteksi.
<br> ❗ _️**Versi modifikasi dari [original repo](https://github.com/Kazuhito00/hand-gesture-recognition-using-mediapipe).**_ ❗
<br> ❗ _️**Versi bahasa inggris [Translated repo](https://github.com/kinivi/hand-gesture-recognition-mediapipe).**_ ❗
<br> 
![mqlrf-s6x16](https://user-images.githubusercontent.com/37477845/102222442-c452cd00-3f26-11eb-93ec-c387c98231be.gif)

Repository ini merupakan aplikasi yang dideploy menggunakan Flask tetapi masih secara local server.

# Demo Program
Cara run.
```bash
python app.py
```
# ASL
![image](https://user-images.githubusercontent.com/54676003/202891969-7de03906-426a-46a9-8c3e-5b66401b7365.png)

# Demo Aplikasi
![Copy of SIBI (2)](https://user-images.githubusercontent.com/54676003/205431758-a416dec9-712b-4d33-a839-fe2634339a31.png)
Aplikasi ini memiliki beberapa fitur: 
* insert : untuk menyimpan huruf hasil live prediction agar dapat disusun menjadi kalimat
* space : untuk menambahkan spasi antar kata ketika diinginkan
* delete : untuk menghapus input yang tidak sesuai
* export : untuk export kalimat yang sudah disimpan menjadi speech
    
### keypoint_classification.ipynb
Ini adalah model training script untuk hand sign recognition

### point_history_classification.ipynb
Ini adalah model training script untuk finger gesture recognition

### model/keypoint_classifier
Directory ini menyimpan file-file yang terhubung dengan proses hand sign recognition. <br>
Berikut file-filenya:
* Training data(keypoint.csv)
* Trained model(keypoint_classifier.tflite)
* Label data(keypoint_classifier_label.csv)
* Inference module(keypoint_classifier.py)

### model/point_history_classifier
Directory ini menyimpan file-file yang terhubung dengan proses movement finger sign recognition. <br>
Berikut file-filenya:
* Training data(point_history.csv)
* Trained model(point_history_classifier.tflite)
* Label data(point_history_classifier_label.csv)
* Inference module(point_history_classifier.py)

### utils/cvfpscalc.py
Ini modul untuk mengkalkulasi FPS

# Key point coordinates
Key point coordinates didapatkan melalui 4 tahap pre-processing ④.<br>
<img src="https://user-images.githubusercontent.com/37477845/102242918-ed328c80-3f3d-11eb-907c-61ba05678d54.png" width="80%">
<img src="https://user-images.githubusercontent.com/37477845/102244114-418a3c00-3f3f-11eb-8eef-f658e5aa2d0d.png" width="80%"><br><br>

#### Arsitektur Model
The image of the model prepared in "[keypoint_classification.ipynb](keypoint_classification.ipynb)" is as follows.
<img src="https://user-images.githubusercontent.com/37477845/102246723-69c76a00-3f42-11eb-8a4b-7c6b032b7e71.png" width="50%"><br><br>


# Point hisotry coordinates
Point history coordinates didapatkan melalui 4 tahap pre-processing ④.<br>
<img src="https://user-images.githubusercontent.com/37477845/102244148-49e27700-3f3f-11eb-82e2-fc7de42b30fc.png" width="80%"><br><br>
<img src="https://user-images.githubusercontent.com/37477845/102350951-06444780-3fe9-11eb-98cc-91e352edc23c.jpg" width="20%">　<img src="https://user-images.githubusercontent.com/37477845/102350942-047a8400-3fe9-11eb-9103-dbf383e67bf5.jpg" width="20%">

#### Arsitektur Model
<img src="https://user-images.githubusercontent.com/37477845/102246771-7481ff00-3f42-11eb-8ddf-9e3cc30c5816.png" width="50%"><br>

# Reference
* [MediaPipe](https://mediapipe.dev/)

# Author
Kazuhito Takahashi(https://twitter.com/KzhtTkhs)

# Translation and other improvements
Nikita Kiselov(https://github.com/kinivi)
 
# License 
hand-gesture-recognition-using-mediapipe is under [Apache v2 license](LICENSE).
# TugasAkhirOFA
