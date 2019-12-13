USE [ProjectManager]
GO

/****** Object:  Table [dbo].[Project]    Script Date: 5/6/2019 3:03:28 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Project](
	[Project_ID] [int] IDENTITY(1,1) NOT NULL,
	[Project_Name] [nvarchar](50) NULL,
	[Start Date] [datetime2](7) NULL,
	[End Date] [datetime2](7) NULL,
	[Priority] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[Project_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO


