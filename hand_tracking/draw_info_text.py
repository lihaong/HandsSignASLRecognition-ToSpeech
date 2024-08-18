import cv2 as cv


def draw_info_text(image, brect, handedness, hand_sign_text,
                   finger_gesture_text, mode):
    global res_prediction
    cv.rectangle(image, (brect[0], brect[1]), (brect[2], brect[1] - 22),
                 (0, 0, 0), -1)

    info_text = handedness.classification[0].label[0:]
    if mode == 1:
        if hand_sign_text == "I" and finger_gesture_text == "J":
            info_text = info_text + ':' + finger_gesture_text  # kunci
            res_prediction = finger_gesture_text
        elif hand_sign_text == "D" and finger_gesture_text == "Z":
            info_text = info_text + ':' + finger_gesture_text  # kunci
            res_prediction = finger_gesture_text
        elif hand_sign_text != "":
            info_text = info_text + ':' + hand_sign_text  # kunci
            res_prediction = hand_sign_text
    else:
        res_prediction = ""
        if hand_sign_text == "Pointer":
            info_text = info_text + ':' + finger_gesture_text
        else:
            info_text = ''
    cv.putText(image, info_text, (brect[0] + 5, brect[1] - 4),
               cv.FONT_HERSHEY_SIMPLEX, 0.6, (255, 255, 255), 1, cv.LINE_AA)

    return image, res_prediction
