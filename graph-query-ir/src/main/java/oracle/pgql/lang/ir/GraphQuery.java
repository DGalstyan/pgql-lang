/**
 * Copyright (C) 2013 - 2016 Oracle and/or its affiliates. All rights reserved.
 */
package oracle.pgql.lang.ir;

public class GraphQuery {

  private final Projection projection;

  private final GraphPattern graphPattern;

  private final GroupBy groupBy;
  
  private final OrderBy orderBy;
  
  private final long limit;
  
  private final long offset;

  /**
   * Constructor
   */
  public GraphQuery(Projection projection, GraphPattern graphPattern, GroupBy groupBy,
      OrderBy orderBy, long limit, long offset) {
    this.projection = projection;
    this.graphPattern = graphPattern;
    this.groupBy = groupBy;
    this.orderBy = orderBy;
    this.limit = limit;
    this.offset = offset;
  }

  public Projection getProjection() {
    return projection;
  }

  public GraphPattern getGraphPattern() {
    return graphPattern;
  }

  public GroupBy getGroupBy() {
    return groupBy;
  }

  public OrderBy getOrderBy() {
    return orderBy;
  }

  public long getLimit() {
    return limit;
  }

  public long getOffset() {
    return offset;
  }

  @Override
  public String toString() {
    String result = projection + "\n" + graphPattern;
    if (groupBy.getElements().isEmpty() == false) {
      result += "\n" + groupBy;
    }
    if (orderBy.getElements().isEmpty() == false) {
      result += "\n" + orderBy;
    }
    if (limit > -1) {
      result += "\nLIMIT " + limit;
    }
    if (offset > -1) {
      result += "\nOFFSET " + offset;
    }
    return result;
  }
}