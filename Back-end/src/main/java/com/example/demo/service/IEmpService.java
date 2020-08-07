package com.example.demo.service;

import java.util.Map;

public interface IEmpService {
	public Map<String, Object> listEmployees(int pageNo, int pageSize, String sortBy);
}
