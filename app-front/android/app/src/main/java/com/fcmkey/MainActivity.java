package com.fcmkey;

import com.facebook.react.ReactActivity;
import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;
import com.google.firebase.messaging.FirebaseMessaging;
import android.os.Bundle;
import android.util.Log;
import android.widget.Toast;

import androidx.annotation.NonNull;


public class MainActivity extends ReactActivity {

    private static final String TAG = MainActivity.class.getSimpleName();

    /**
     * Returns the name of the main component registered from JavaScript. This is used to schedule
     * rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "fcmkey";
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        //추가한 라인
//        FirebaseMessaging.getInstance().subscribeToTopic("keyword")
//                .addOnCompleteListener(new OnCompleteListener<Void>() {
//                    @Override
//                    public void onComplete(@NonNull Task<Void> task) {
//                        String msg = "Topic news is subscribed";
//                        if (!task.isSuccessful()) {
//                            msg = "Topic news subscribing failed";
//                        }
//                        Log.d("FCMTest", msg);
//                        Toast.makeText(MainActivity.this, msg, Toast.LENGTH_SHORT).show();
//                    }
//                });
    }
}