/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.dtstack.taier.datax;

import com.dtstack.taier.pluginapi.JobClient;
import com.dtstack.taier.pluginapi.JobIdentifier;
import com.dtstack.taier.pluginapi.client.AbstractClient;
import com.dtstack.taier.pluginapi.enums.TaskStatus;
import com.dtstack.taier.pluginapi.exception.ExceptionUtil;
import com.dtstack.taier.pluginapi.pojo.JobResult;
import com.dtstack.taier.pluginapi.pojo.JudgeResult;
import com.dtstack.taier.pluginapi.pojo.ParamAction;
import com.dtstack.taier.pluginapi.util.PublicUtil;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.Properties;

/**
 * @author qiuyun
 * @version 1.0
 * @date 2022-08-16 17:34
 */
public class DataxClient extends AbstractClient {
    private static final Logger LOG = LoggerFactory.getLogger(DataxClient.class);

    private static final String YARN_RM_WEB_KEY_PREFIX = "yarn.resourcemanager.webapp.address.";

    private static final String APP_URL_FORMAT = "http://%s";

    /**
     * 创建DataX脚本
     */
    private static final String CREATE_TEMP_DATAX_PY = "%s/bin/datax.py   %s";


    @Override
    public void init(Properties prop) throws Exception {
        LOG.info("ScriptClient init ...");




        LOG.info("ScriptClient init ok");
    }


    @Override
    public JobResult submitJob(JobClient jobClient) {
        String pluginInfo = jobClient.getPluginInfo();
        try {
            Properties properties = PublicUtil.jsonStrToObject(pluginInfo, Properties.class);
            String tempTaskData = properties.get("datax.task.temp").toString();

        } catch (IOException e) {
            throw new RuntimeException(e);
        }

        return null;
    }

    @Override
    public JobResult cancelJob(JobIdentifier jobIdentifier) {
        String jobId = jobIdentifier.getApplicationId();
        return null;
    }

    @Override
    public JudgeResult judgeSlots(JobClient jobClient) {
        try {
           return JudgeResult.ok();
        } catch (Exception e) {
            LOG.error("jobId:{} judgeSlots error:", jobClient.getJobId(), e);
            return JudgeResult.exception("judgeSlots error:" + ExceptionUtil.getErrorMessage(e));
        }
    }

    @Override
    public TaskStatus getJobStatus(JobIdentifier jobIdentifier) throws IOException {
        String jobId = jobIdentifier.getApplicationId();
        if(StringUtils.isEmpty(jobId)){
            return null;
        }
        try {
            return null;
        } catch (Exception e) {
            LOG.error("getJobStatus error, return RUNNING", e);
            return TaskStatus.RUNNING;
        }
    }

    @Override
    protected JobResult processSubmitJobWithType(JobClient jobClient) {
        return null;
    }

    @Override
    public String getJobMaster(JobIdentifier jobIdentifier) {
        return null;
    }

    @Override
    public String getJobLog(JobIdentifier jobIdentifier) {
        try {
           return "";
        } catch (Exception e) {
            LOG.error("getJobLog error", e);
            Map<String,Object> jobLog = new HashMap<>();
            jobLog.put("msg_info", e.getMessage());

        }
        return "";
    }

}