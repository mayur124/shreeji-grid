package com.example.demo.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.service.IEmpService;

@RestController
public class EmpController {
	@Autowired
	private IEmpService empService;

	@CrossOrigin(origins = "*", allowedHeaders = "*")
	@GetMapping(path = "/list")
	public Map<String, Object> listEmployees(@RequestParam(defaultValue = "0") Integer pageNo,
			@RequestParam(defaultValue = "50") Integer pageSize, @RequestParam(defaultValue = "empNo") String sortBy) {
		return empService.listEmployees(pageNo, pageSize, sortBy);
	}
}
