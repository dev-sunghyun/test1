package com.mes.project.lsh.workQuality;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class WorkQualityDAO {

	@Autowired
	private SqlSession sqlSession;
	
	// 조회
	public List<WorkQualityDTO> selectWorkQualityDetail() {
		
		return sqlSession.selectList("mapper.workQuality.selectWorkQualityDetail");
	}
	
	public List<WorkQualityDTO> selectWorkQualityFacility() {
		
		return sqlSession.selectList("mapper.workQuality.selectWorkQualityFacility");
	}
	
	public WorkQualityDTO selectWorkQualityStaff() {
		
		return sqlSession.selectOne("mapper.workQuality.selectWorkQualityStaff");
	}
	
	// 추가
	public void insertWorkQuality(WorkQualityDTO workQualityDTO) {

		sqlSession.selectList("mapper.workQuality.insertWorkQuality", workQualityDTO);
	}
	
	// 수정
	public void updateWorkQuality(WorkQualityDTO workQualityDTO) {
		
		sqlSession.selectList("mapper.workQuality.updateWorkQuality", workQualityDTO);
	}
	
	// 삭제
	public void deleteWorkQuality(WorkQualityDTO workQualityDTO) {

		sqlSession.selectList("mapper.workQuality.deleteWorkQuality", workQualityDTO);
	}
}
