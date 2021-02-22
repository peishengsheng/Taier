package com.dtstack.engine.dao;

import com.dtstack.engine.api.domain.ComponentConfig;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * @author yuebai
 * @date 2021-02-08
 */
public interface ComponentConfigDao {

    List<ComponentConfig> listByComponentId(@Param("componentId")Long componentId,@Param("isFilter") boolean isFilter);

    Integer insertBatch(@Param("componentConfigs") List<ComponentConfig> componentConfigs);

    Integer deleteByComponentId(@Param("componentId")Long componentId);
}
