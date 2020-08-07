package com.example.demo.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.example.demo.model.Emp;
import com.example.demo.model.PageData;
import com.example.demo.repository.EmpRepo;

@Service
public class EmpServiceImpl implements IEmpService {
	@Autowired
	private EmpRepo empRepo;

	@Override
	public Map<String, Object> listEmployees(int pageNo, int pageSize, String sortBy) {
		Map<String, Object> response = new HashMap<String, Object>();
		Pageable paging = PageRequest.of(pageNo, pageSize, Sort.by(sortBy));
		Page<Emp> pagedResult = empRepo.findAll(paging);
		response.put("pageData", this.getPageData(pagedResult));
		if (pagedResult.hasContent()) {
			response.put("data", pagedResult.getContent());
		} else {
			response.put("data", new ArrayList<Emp>());
		}
		return response;
	}

	private PageData getPageData(Page<Emp> page) {
		PageData pageData = new PageData();
		pageData.setTotalPages(page.getTotalPages());
		pageData.setTotalRecords(page.getTotalElements());
		return pageData;
	}
}
