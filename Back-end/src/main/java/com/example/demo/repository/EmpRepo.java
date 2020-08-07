package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Emp;

@Repository
public interface EmpRepo extends JpaRepository<Emp, Long> {

}
