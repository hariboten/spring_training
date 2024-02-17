package com.example.demo.chatapp;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ChatController {

	List<Post> list = new ArrayList<>();

	@GetMapping("/api/chat/list")
	public ResponseEntity<List<Post>> list() {
		return ResponseEntity.ok(list);
	}

	@PostMapping("/api/chat/post")
	public ResponseEntity<List<Post>> post(@RequestBody Post post) {
		if (post == null) {
			return ResponseEntity.badRequest().build();
		}
		list.add(post);
		return ResponseEntity.accepted().body(list);
	}
}
