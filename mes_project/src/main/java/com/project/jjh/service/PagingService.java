package com.project.jjh.service;

import java.util.List;

import com.project.jjh.dao.Paging_DAO;
import com.project.jjh.dto.PagingDTO;


public class PagingService {

	Paging_DAO pagingDAO = new Paging_DAO();

	public List<PagingDTO> listPaging(int pageNum, int countPerPage, String name) {
		int start = 0;
		int end = 0;
		// start : ( ( 2 - 1 ) * 5 ) + 1
		// end : 2 * 5

		start = ((pageNum - 1) * countPerPage) + 1;
		end = pageNum * countPerPage;
		List list = pagingDAO.selectPost(start, end, name);

		return list;

	}

	public static int getTotalPaging() {
		return Paging_DAO.selectTotalEmp();

	}
}
