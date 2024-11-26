# Sign Language Translator System Using Hand Gestures

This project classifies hand gestures following the American Sign Language (ASL) standard using MediaPipe (Python version).  
It is an application designed to recognize Hand Gestures (Sign Language) through a simple MLP using detected keypoints.

❗️ _️**Modified version of the [original repository](https://github.com/Kazuhito00/hand-gesture-recognition-using-mediapipe).**_ ❗  
❗️ _️**English-translated version available at [translated repository](https://github.com/kinivi/hand-gesture-recognition-mediapipe).**_ ❗  

![Demo](https://user-images.githubusercontent.com/37477845/102222442-c452cd00-3f26-11eb-93ec-c387c98231be.gif)

This application is deployed locally using Flask.

---

## Program Demo

To run the application:
```bash
python app.py
```

---

## American Sign Language (ASL)

![ASL example](https://user-images.githubusercontent.com/54676003/202891969-7de03906-426a-46a9-8c3e-5b66401b7365.png)

---

## Application Demo

![Application Demo](https://user-images.githubusercontent.com/54676003/205431758-a416dec9-712b-4d33-a839-fe2634339a31.png)

### Features:
- **Insert**: Save the predicted letters to form sentences.  
- **Space**: Add a space between words.  
- **Delete**: Remove incorrect inputs.  
- **Export**: Export the saved sentence to speech using the `text-to-speech` library.  

The web application allows users to save predictions as text and then export them as speech output. This feature enables better accessibility and practical use in real-time scenarios.

---

## Script Details

### `keypoint_classification.ipynb`
A training script for hand sign recognition.

### `point_history_classification.ipynb`
A training script for finger gesture recognition.

---

## Directory Structure

### `model/keypoint_classifier`
Contains files related to hand sign recognition:
- **Training data**: `keypoint.csv`  
- **Trained model**: `keypoint_classifier.tflite`  
- **Label data**: `keypoint_classifier_label.csv`  
- **Inference module**: `keypoint_classifier.py`  

### `model/point_history_classifier`
Contains files related to finger movement recognition:
- **Training data**: `point_history.csv`  
- **Trained model**: `point_history_classifier.tflite`  
- **Label data**: `point_history_classifier_label.csv`  
- **Inference module**: `point_history_classifier.py`  

### `utils/cvfpscalc.py`
A utility module for calculating FPS.

---

## Key Point Coordinates

Key point coordinates are derived through a 4-step preprocessing pipeline:  
<img src="https://user-images.githubusercontent.com/37477845/102242918-ed328c80-3f3d-11eb-907c-61ba05678d54.png" width="80%">  
<img src="https://user-images.githubusercontent.com/37477845/102244114-418a3c00-3f3f-11eb-8eef-f658e5aa2d0d.png" width="80%">

### Model Architecture
The architecture for the model prepared in `[keypoint_classification.ipynb](keypoint_classification.ipynb)` is:  
<img src="https://user-images.githubusercontent.com/37477845/102246723-69c76a00-3f42-11eb-8a4b-7c6b032b7e71.png" width="50%">

---

## Point History Coordinates

Point history coordinates are derived through a 4-step preprocessing pipeline:  
<img src="https://user-images.githubusercontent.com/37477845/102244148-49e27700-3f3f-11eb-82e2-fc7de42b30fc.png" width="80%">  

<img src="https://user-images.githubusercontent.com/37477845/102350951-06444780-3fe9-11eb-98cc-91e352edc23c.jpg" width="20%">  
<img src="https://user-images.githubusercontent.com/37477845/102350942-047a8400-3fe9-11eb-9103-dbf383e67bf5.jpg" width="20%">

### Model Architecture
<img src="https://user-images.githubusercontent.com/37477845/102246771-7481ff00-3f42-11eb-8ddf-9e3cc30c5816.png" width="50%">

---

## Reference
- [MediaPipe](https://mediapipe.dev/)

---

## Author
- Kazuhito Takahashi ([Twitter](https://twitter.com/KzhtTkhs))

## Translation and Improvements
- Nikita Kiselov ([GitHub](https://github.com/kinivi))

## License
This project is licensed under the [Apache v2 license](LICENSE).
```
