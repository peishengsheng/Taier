package com.dtstack.taier.datasource.api.dto;

import com.google.common.collect.Lists;
import org.apache.commons.lang3.StringUtils;

import java.util.Iterator;
import java.util.List;

/**
 * @author ：wangchuan
 * date：Created in 下午2:23 2020/8/12
 * company: www.dtstack.com
 */
public class Column {
    private String name;
    private String type;
    private String comment;
    private Integer index;
    private String alias;
    private String table;

    public Column(String name, Integer index) {
        this.name = name;
        this.index = index;
    }

    public Column() {
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getType() {
        return this.type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getComment() {
        return this.comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public Integer getIndex() {
        return this.index;
    }

    public void setIndex(Integer index) {
        this.index = index;
    }

    public String getAlias() {
        return this.alias;
    }

    public void setAlias(String alias) {
        this.alias = alias;
    }

    public String getTable() {
        return this.table;
    }

    public void setTable(String table) {
        this.table = table;
    }

    public String toString() {
        return "Column{name='" + this.name + '\'' + ", type='" + this.type + '\'' + ", comment='" + this.comment + '\'' + ", index=" + this.index + ", alias='" + this.alias + '\'' + ", table='" + this.table + '\'' + '}';
    }

    public static List<Column> getColumns(List<String> cols) {
        List<Column> columns = Lists.newArrayList();
        int index = 0;
        Iterator var3 = cols.iterator();

        while (var3.hasNext()) {
            String col = (String) var3.next();
            if (StringUtils.isNotEmpty(col)) {
                columns.add(new Column(col, index++));
            }
        }

        return columns;
    }
}

