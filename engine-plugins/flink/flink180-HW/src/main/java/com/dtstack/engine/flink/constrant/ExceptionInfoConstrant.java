package com.dtstack.engine.flink.constrant;

public class ExceptionInfoConstrant {

    /**  undo restart*/
    public final static String FLINK_UNALE_TO_GET_CLUSTERCLIENT_STATUS_EXCEPTION = "Unable to get ClusterClient status from Application Client";

    public final static String FLINK_GET_LOG_ERROR_UNDO_RESTART_EXCEPTION = "Failed to get the stopped task log, please check if job history is enabled";
}
