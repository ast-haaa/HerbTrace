package com.astra.service;

import com.astra.api.dto.AiSensorRequest;
import com.astra.api.dto.AiResponse;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class AiService {

    private final String AI_URL = "http://127.0.0.1:8001/predict";
    private final RestTemplate restTemplate = new RestTemplate();

    public AiResponse getRisk(double temp, double humidity, double voc) {
        AiSensorRequest req = new AiSensorRequest();
        req.temp = temp;
        req.humidity = humidity;
        req.voc = voc;

        return restTemplate.postForObject(AI_URL, req, AiResponse.class);
    }
}